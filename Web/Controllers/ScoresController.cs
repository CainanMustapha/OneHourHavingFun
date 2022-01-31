using Common.Entities;
using Common.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace Web.Controllers
{
    public class ScoresController : ApiController
    {
        private readonly IScoreManager _scoreManager;
        //private readonly ILogger _logger;

        public ScoresController(/*IScoreManager scoreManager, ILogger logger*/)
        {
            //_scoreManager = scoreManager;
            //_logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<ScoreCard>> ScoreCards(int id)
        {
            var scores = new List<ScoreCard>()
            {
                new ScoreCard()
            };

            return scores;

            //TO DO
            //var scoreCards = _scoreManager.GetScores(id);
            //return scoreCards;
        }

        [HttpGet]
        public async Task<ScoreCard> ScoreCard(int id, int cardId)
        {
            return new ScoreCard();

            //TO DO
            //var scoreCard = _scoreManager.GetScores(id, cardId);
            //return scoreCard;
        }

        [HttpPost]
        public async Task<ScoreCard> UpdateScoreCard(int id, [FromBody] ScoreCard scoreCard)
        {
            var score = _scoreManager.UpdateScore(id, scoreCard.Id);

            return score;
        }
    }
}
