using Common.Entities;
using Common.Interfaces;
using System;
using System.Collections.Generic;

namespace Web.Services
{
    public class ScoreManager : IScoreManager
    {
        public ScoreCard GetScores(int playerId, int scoreCardId)
        {
            //To Do - early return
            // Can't very playerId, throw exception
            // If player exist but can't very scoreCardId throw exception
            
            throw new NotImplementedException();
        }

        public ScoreCard UpdateScore(int playerId, int scoreCardId)
        {
            throw new NotImplementedException();
        }

        public ScoreCard UpdateScores(int scoreCardId)
        {
            throw new NotImplementedException();
        }

        IEnumerable<ScoreCard> IScoreManager.GetScores(int playerId)
        {
            throw new NotImplementedException();
        }
    }
}