class Solution
{
    public:
    //Function to return the minimum cost of connecting the ropes.
    long long minCost(long long arr[], long long n) {
        // Your code here
        multiset<long long> ms;
        for(int i=0;i<n;i++) {
            ms.insert(arr[i]);
        }
        long long ans=0;
        while(ms.size() > 1) {
            auto it = ms.begin();
            long long cost = *it;
            ms.erase(it);
            it = ms.begin();
            cost += *it;
            ms.erase(it);
            ms.insert(cost);
            ans += cost;
        }
        return ans;
    }
};