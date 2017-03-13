using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardGameDataFinish
{
  public class GameRepository
  {
    private GameContext _context;
    public GameRepository()
    {
      _context = new GameContext();
    }
    public void Add(Game game)
    {
      _context.GameSet.Add(game);
      _context.SaveChanges();
    }

    public List<Game> GetAllGames()
    {
      return _context.GameSet.ToList();
    }

    public void DeleteGame(Game game)
    {
      _context.GameSet.Remove(game);
      _context.SaveChanges();
    }

    public Game GetGameById(int id)
    {
      return _context.GameSet.Find(id);
    }

    public void SaveChanges()
    {
      _context.SaveChanges();
    }
  }
}
