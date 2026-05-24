import api from "./api";

// 1️⃣ Sync jobseeker + recruiter into admin table
export const syncAdminUsers = () => {
  return api.post("/admin/sync");
};

// 2️⃣ Get admin users
export const getAdminUsers = () => {
  return api.get("/admin/users");
};
