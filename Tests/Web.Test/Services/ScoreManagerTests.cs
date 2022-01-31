using Common.Interfaces;
using Web.Services;
using Web.Test.Fixtures;
using Xunit;

namespace Web.Test.Services
{
    public class ScoreManagerTests : IClassFixture<ScoreManagerTestsFixture>
    {
        private ScoreManagerTestsFixture _scoreManagerTestsFixture;

        public ScoreManagerTests(ScoreManagerTestsFixture scoreManagerTestsFixture)
        {
            _scoreManagerTestsFixture = scoreManagerTestsFixture;
        }

        [Fact]
        public void GivenAPlayerId_WhenRequestForScore_ShouldReturnTypeScoreCard()
        {
            var scoreManager = new ScoreManager();

            var outcome = scoreManager.GetScores(1, 1);

            Assert.IsAssignableFrom<IScoreCard>(outcome);
        }

    }
}
