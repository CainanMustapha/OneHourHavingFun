using System;
using Web.Services;

namespace Web.Test.Fixtures
{
    public class ScoreManagerTestsFixture : IDisposable
    {
        public ScoreManager ScoreManager { get; private set; }

        public ScoreManagerTestsFixture()
        {
            ScoreManager = new ScoreManager();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
