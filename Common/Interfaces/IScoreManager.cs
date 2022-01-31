using Common.Entities;
using System.Collections.Generic;

namespace Common.Interfaces
{
    public interface IScoreManager
    {
        IEnumerable<ScoreCard> GetScores(int playerId);
        ScoreCard GetScores(int playerId, int scoreCardId);
        ScoreCard UpdateScores(int scoreCardId);
        ScoreCard UpdateScore(int playerId, int scoreCardId);
    }
}
