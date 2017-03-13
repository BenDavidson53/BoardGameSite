using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardGameDataFinish
{
  public class PlayerGameRepository
  {
    private GameContext _context;
    public PlayerGameRepository()
    {
      _context = new GameContext();
    }

    public void AddPlayerGame(PlayerGame pg)
    {
      _context.PlayerGameSet.Add(pg);
      _context.SaveChanges();
    }

    public PlayerGame GetPlayerGameById(int id)
    {
      return _context.PlayerGameSet
        .Where(x => x.PlayerGameId == id)
        .Include(pg => pg.Player)
        .Include(pg => pg.Game)
        .FirstOrDefault();
    }

    public List<PlayerGame> GetAllPlayerGames()
    {
      return _context.PlayerGameSet
        .Include(pg => pg.Player)
        .Include(pg => pg.Game)
        .ToList();
    }

    public void RemovePlayerGame(PlayerGame pg)
    {
      _context.PlayerGameSet.Remove(pg);
      _context.SaveChanges();
    }

    public void SaveChanges()
    {
      _context.SaveChanges();
    }
  }
}
