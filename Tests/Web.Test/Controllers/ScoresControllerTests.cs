using Common.Entities;
using System.Collections.Generic;
using Web.Controllers;
using Xunit;

namespace Web.Test.Controllers
{
    public class ScoresControllerTests
    {
        [Fact]
        public async void ScoreCards_GivenAPlayerId_ShouldReturnListOfStoreCards()
        {
            var scoreController = new ScoresController();

            var outcome = await scoreController.ScoreCards(1).ConfigureAwait(false);

            Assert.IsAssignableFrom<IEnumerable<ScoreCard>>(outcome);
        }
    }
}
