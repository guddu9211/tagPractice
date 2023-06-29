#include<bits/stdc++.h>

using namespace std;

class Node {
public:
    bool val;
    bool isLeaf;
    Node* topLeft;
    Node* topRight;
    Node* bottomLeft;
    Node* bottomRight;
    
    Node() {
        val = false;
        isLeaf = false;
        topLeft = NULL;
        topRight = NULL;
        bottomLeft = NULL;
        bottomRight = NULL;
    }
    
    Node(bool _val, bool _isLeaf) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = NULL;
        topRight = NULL;
        bottomLeft = NULL;
        bottomRight = NULL;
    }
    
    Node(bool _val, bool _isLeaf, Node* _topLeft, Node* _topRight, Node* _bottomLeft, Node* _bottomRight) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = _topLeft;
        topRight = _topRight;
        bottomLeft = _bottomLeft;
        bottomRight = _bottomRight;
    }
};

class Solution {
    bool isAllLeaf(Node* tl, Node* bl, Node* tr, Node* br){
        if(tl->isLeaf && bl->isLeaf && tr->isLeaf && br->isLeaf){
            return true;
        }
        return false;
    }

    Node* solve(vector<vector<int>>& grid, int x1, int x2, int y1, int y2){
        if(x1==x2 && y1==y2){
            Node* temp = new Node((bool)grid[x1][y1], true);
            return temp;
        }

        int midx = x1 + (x2 - x1)/2;
        int midy = y1 + (y2 - y1)/2;

        Node* root = new Node();

        Node* tl = solve(grid, x1, midx, y1, midy);
        Node* bl = solve(grid, x1, midx, midy+1, y2);
        Node* tr = solve(grid, midx+1, x2, y1, midy);
        Node* br = solve(grid, midx+1, x2, midy+1, y2);

        if(isAllLeaf(tl,bl,tr,br)){
            root->isLeaf = true;
            root->val = tl->val;
        }else{
            root->topLeft = tl;
            root->bottomLeft = bl;
            root->topRight = tr;
            root->bottomRight = br;
        }

        return root;
    }

public:
    Node* construct(vector<vector<int>>& grid) {
        return solve(grid,0,grid.size()-1, 0, grid.size()-1);
    }
};

void traverse(Node* root){
    if(root == NULL){
        return;
    }

    cout<<"val: "<<root->val<<endl;
    cout<<"isLeaf: "<<root->isLeaf<<endl;

    cout<<"TR: "<<root->topRight<<endl;
    cout<<"TL: "<<root->topLeft<<endl;
    cout<<"BR: "<<root->bottomRight<<endl;
    cout<<"BL: "<<root->bottomLeft<<endl;

}

int main(){
    int n;
    vector<vector<int>> g(n, vector<int>(n));
    for(int i = 0 ; i<n ; i++){
        for(int j = 0 ; j<n ; j++){
            cin>>g[i][j];
        }
    }
    Solution s;
    Node* ans = s.construct(g);

    traverse(ans);
}