using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BoardGameDataFinish;
using BoardGameSite.Models;

namespace BoardGameSite.Controllers
{
  public class HomeController : Controller
  {
    public ActionResult Index()
    {
      return View();
    }

    public ActionResult Games()
    {
      return View();
    }

    public ActionResult Players()
    {
      return View();
    }

    public ActionResult GamesPlayed()
    {
      return View();
    }

    #region Game
    [HttpPost]
    public JsonNetResult GetAllGames()
    {
      var results = new GameRepository().GetAllGames();

      return new JsonNetResult(new
      {
        Data = results
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult AddGame(string name)
    {
      string errorMessage = string.Empty;
      try
      {
        var game = new Game { Description = name };
        new GameRepository().Add(game);
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult DeleteGameById(int id)
    {
      string errorMessage = string.Empty;
      try
      {
        var repo = new GameRepository();
        var gameToDelete = repo.GetGameById(id);
        repo.DeleteGame(gameToDelete);
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult GetGameById(int id)
    {
      var gameById = new Game();
      try
      {
        var repo = new GameRepository();
        gameById = repo.GetGameById(id);
      }
      catch (Exception)
      {
        throw;
      }

      return new JsonNetResult(new
      {
        Data = gameById
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult UpdateGame(Game game)
    {
      string errorMessage = string.Empty;
      try
      {
        var repo = new GameRepository();
        var gameToDelete = repo.GetGameById(game.GameId);
        gameToDelete.Description = game.Description;
        repo.SaveChanges();
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }
    #endregion

    #region Player
    [HttpPost]
    public JsonNetResult GetAllPlayers()
    {
      var results = new PlayerRepository().GetAllPlayers();

      return new JsonNetResult(new
      {
        Data = results
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult AddPlayer(string name)
    {
      string errorMessage = string.Empty;
      try
      {
        var player = new Player { Description = name };
        new PlayerRepository().AddPlayer(player);
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult DeletePlayerById(int id)
    {
      string errorMessage = string.Empty;
      try
      {
        var repo = new PlayerRepository();
        var playerToDelete = repo.GetPlayerById(id);
        repo.RemovePlayer(playerToDelete);
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult GetPlayerById(int id)
    {
      var playerById = new Player();
      try
      {
        var repo = new PlayerRepository();
        playerById = repo.GetPlayerById(id);
      }
      catch (Exception)
      {
        throw;
      }

      return new JsonNetResult(new
      {
        Data = playerById
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult UpdatePlayer(Player player)
    {
      string errorMessage = string.Empty;
      try
      {
        var repo = new PlayerRepository();
        var playerToUpdate = repo.GetPlayerById(player.PlayerId);
        repo.UpdatePlayerDescription(playerToUpdate, player.Description);
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }
    #endregion

    #region PlayerGame
    [HttpPost]
    public JsonNetResult GetAllPlayerGames()
    {
      var results = new PlayerGameRepository().GetAllPlayerGames();

      return new JsonNetResult(new
      {
        Data = results
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult AddPlayerGame(int playerId, int gameId)
    {
      string errorMessage = string.Empty;
      try
      {
        var playerGame = new PlayerGame { PlayerId = playerId, GameId = gameId };
        new PlayerGameRepository().AddPlayerGame(playerGame);
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult DeletePlayerGameById(int id)
    {
      string errorMessage = string.Empty;
      try
      {
        var repo = new PlayerGameRepository();
        var playerGameToDelete = repo.GetPlayerGameById(id);
        repo.RemovePlayerGame(playerGameToDelete);
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult GetPlayerGameById(int id)
    {
      var playerGameById = new PlayerGame();
      try
      {
        var repo = new PlayerGameRepository();
        playerGameById = repo.GetPlayerGameById(id);
      }
      catch (Exception)
      {
        throw;
      }

      return new JsonNetResult(new
      {
        Data = playerGameById
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult UpdatePlayerGame(PlayerGame playerGame)
    {
      string errorMessage = string.Empty;
      try
      {
        var repo = new PlayerGameRepository();
        var playerToUpdate = repo.GetPlayerGameById(playerGame.PlayerGameId);
        playerToUpdate.GameId = playerGame.Game.GameId;
        playerToUpdate.PlayerId = playerGame.Player.PlayerId;
        repo.SaveChanges();
      }
      catch (Exception e)
      {
        errorMessage = e.Message;
      }

      return new JsonNetResult(new
      {
        ErrorMessage = errorMessage
      }, JsonRequestBehavior.DenyGet);
    }

    [HttpPost]
    public JsonNetResult GetPlayersAndGames()
    {
      var players = new List<Player>();
      var games = new List<Game>();

      try
      {
        var playerRepo = new PlayerRepository();
        var gameRepo = new GameRepository();
        players = playerRepo.GetAllPlayers();
        games = gameRepo.GetAllGames();

      }
      catch (Exception e)
      {
        
      }

      return new JsonNetResult(new
      {
        Players = players,
        Games = games
      }, JsonRequestBehavior.DenyGet);
    }
    #endregion
  }
}