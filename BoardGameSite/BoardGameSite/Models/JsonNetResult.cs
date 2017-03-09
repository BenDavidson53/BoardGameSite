using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace BoardGameSite.Models
{
  // Totally stolen from HealthEquity
  public class JsonNetResult : JsonResult
  {
    public JsonSerializerSettings SerializerSettings { get; set; }

    public JsonNetResult(object data, JsonRequestBehavior jsonRequestBehavior)
      : base()
    {
      this.SerializerSettings = new JsonSerializerSettings
      {
        DateFormatHandling = DateFormatHandling.IsoDateFormat,
        DateTimeZoneHandling = DateTimeZoneHandling.Local,
        ContractResolver = new CamelCasePropertyNamesContractResolver()
      };
      this.SerializerSettings.Converters.Add(new IsoDateTimeConverter());
      Data = data;
      JsonRequestBehavior = jsonRequestBehavior;
    }

    public JsonNetResult(object data)
      : this(data, JsonRequestBehavior.DenyGet)
    {
    }

    public JsonNetResult()
      : this(null)
    {
    }

    public override void ExecuteResult(ControllerContext context)
    {
      if (context == null)
        throw new ArgumentNullException("context");

      if (JsonRequestBehavior == JsonRequestBehavior.DenyGet &&
            String.Equals(context.HttpContext.Request.HttpMethod, "GET", StringComparison.OrdinalIgnoreCase))
      {
        base.ExecuteResult(context);
      }

      var response = context.HttpContext.Response;
      response.ContentType = !String.IsNullOrEmpty(ContentType) ? ContentType : "application/json";
      if (ContentEncoding != null)
        response.ContentEncoding = this.ContentEncoding;

      if (this.Data == null)
        return;

      JsonSerializer.Create(SerializerSettings).Serialize(response.Output, this.Data);
    }
  }
}