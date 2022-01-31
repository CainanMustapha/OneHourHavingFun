using Common.Interfaces;
using System.Runtime.Serialization;

namespace Common.Entities
{
    public class ScoreCard : IScoreCard
    {
        private readonly int _id;

        public ScoreCard()
        {
            // To Generate/Get next score card
            _id = 1;
        }

        public int Id { get => _id; }
        [DataMember]
        public int PlayerScore { get; set; }
        [DataMember]
        public int ComputerScore { get; set; }
    }
}
