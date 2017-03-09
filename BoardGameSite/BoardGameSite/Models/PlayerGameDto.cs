using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoardGameSite.Models
{
  public class PlayerGameDto
  {
    public PlayerDto Player { get; set; }
    public GameDto Game { get; set; }
  }

  public class PlayerDto
  {
    public int PlayerId { get; set; }
    public string Description { get; set; }
  }

  public class GameDto
  {
    public int GameId { get; set; }
    public string Description { get; set; }
  }
}