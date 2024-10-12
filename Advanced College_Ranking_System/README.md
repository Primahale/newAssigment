Filter Colleges by User Preferences:

We use the filter() function to only keep colleges in the preferred location and with fees less than or equal to the max fees.


Calculate Score for Each College:
The formula for score is:

Score = (Ranking × rankingWeight) + (Fees / maxFees × feesWeight)

We use toFixed(2) to keep the score up to 2 decimal places.

Sort Colleges by Score:
We sort the colleges by score in non-decreasing order using sort().


Output the Result:
The sorted list of colleges is displayed, showing the name, location, fees, ranking, and score.