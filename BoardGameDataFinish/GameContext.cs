using BoardGameDataFinish;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardGameDataFinish
{
  public class GameContext : DbContext
  {
    public DbSet<Player> PlayerSet { get; set; }
    public DbSet<Game> GameSet { get; set; }
    public DbSet<PlayerGame> PlayerGameSet { get; set; }
    public GameContext() : base("Data Source=sdvsqlA\\STAN;Initial Catalog=LunchAndLearn;Integrated Security=true;")
    {
      Database.SetInitializer<GameContext>(null);
    }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
      modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
    }
  }
}
