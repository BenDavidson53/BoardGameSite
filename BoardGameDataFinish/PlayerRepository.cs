using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardGameDataFinish
{  
  public class PlayerRepository
  {
    private GameContext _context;
    public PlayerRepository()
    {
      _context = new GameContext();
    }

    public void AddPlayer(Player p)
    {
      _context.PlayerSet.Add(p);
      _context.SaveChanges();
    }

    public Player GetPlayerById(int id)
    {
      return _context.PlayerSet.Find(id);
    }

    public List<Player> GetAllPlayers()
    {
      return _context.PlayerSet.ToList();
    }

    public void RemovePlayer(Player p)
    {
      _context.PlayerSet.Remove(p);
      _context.SaveChanges();
    }

    public void UpdatePlayerDescription(Player p, string description)
    {
      p.Description = description;
      _context.SaveChanges();
    }
  }
}
