#include<bits/stdc++.h>
using namespace std;

class Solution {
    int ans = 0;
    int solve(vector<vector<int>>& types, int t, int i){
        if(t == 0){
            ans += 1;
            return 1;
        }
        if(i >= types.size()){
            return 0;
        }
        
        // going to solve problems of ith type
        int giving = 0;
        for(int i = 1; i<types[i][0] ; i++){
            int req = i*types[i][1];
            if(req <= t){
                giving += solve(types, t-req, i);
            }else{
                break;
            }
        }
        
        // not going to solve any problem of ith type.
        int notGiving = 0;
        notGiving += solve(types, t, i+1);
        
        return giving + notGiving;
    }
public:
    int waysToReachTarget(int target, vector<vector<int>>& types) {
        return solve(types, target, 0);
    }
};

int main(){
    int t, n;
    cin>>t>>n;
    vector<vector<int>> v(n, vector<int>(2));
    for(int i =0 ; i<n ; i++){
        cin>>v[i][0]>>v[i][1];
    }
    Solution s;
    cout<<s.waysToReachTarget(t,v)<<endl;
}