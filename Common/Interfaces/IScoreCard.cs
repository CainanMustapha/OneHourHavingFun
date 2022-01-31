namespace Common.Interfaces
{
    public interface IScoreCard
    {
        int Id { get; }
        int PlayerScore { get; set; }
        int ComputerScore { get; set; }
}
}
