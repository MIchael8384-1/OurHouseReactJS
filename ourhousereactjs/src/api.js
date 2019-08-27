import axios from "axios";
const request = axios.create({
  baseURL: "https://localhost:5001/api"
});

export const getProperties = async query => {
  const { data } = await request.get("/property", { params: query });
  return data;
};

export const postProperty = async property => {
  const { data } = await request.post("/property", property);
  return data;
};

export const getTenants = async query => {
  const { data } = await request.get("/tenants", { params: query });
  return data;
};

export const postTenant = async tenant => {
  const { data } = await request.post("/tenants", tenant);
  return data;
};

export const getMaintenance = async query => {
  const { data } = await request.get("/maintenance", { params: query });
  return data;
};

export const postMaintenanceIssue = async issue => {
  const { data } = await request.post("/maintenance", issue);
  return data;
};
