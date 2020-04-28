import axios from 'axios';

export default {
    createReply: function(newReply) {
        return axios.post("/api/reply", newReply);
    },
    getReply: function() {
        return axios.get("/api/reply");
    },
    createComment: function(newComment) {
        return axios.post("/api/comments", newComment);
    },
    getComment: function() {
        return axios.get("/api/comments");
    }
}