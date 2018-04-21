import axios from "axios";

export default {
  // Gets all books
  getInquiries: function() {
    return axios.get("/api/inquiries");
  },
  // Gets the book with the given id
  getInquiry: function(id) {
    return axios.get("/api/inquiries/" + id);
  },
  // Deletes the book with the given id
  deleteInquiry: function(id) {
    return axios.delete("/api/inquiries/" + id);
  },
  // Saves a book to the database
  saveInquiry: function(inquiryData) {
    return axios.post("/api/inquiries", inquiryData);
  }
};
