export const API_CONFIG = {
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
  headers: { accept: "application/json" },
};

export const getMonthList = async (): Promise<Month[]> => {
  const res = await fetch(`${API_CONFIG.baseURL}/month_list/`, {
    method: "GET",
    headers: API_CONFIG.headers,
  });

  if (!res.ok) {
    // @ts-ignore
    throw new Error(
      `Failed to fetch month list ${res.status} ${res.statusText}`
    );
  }

  const data: MonthList = await res.json();

  return data["month_list"];
};

export const getMonthDetail = async (id: number): Promise<MonthDetail> => {
  const res = await fetch(`${API_CONFIG.baseURL}/month/${id}/`, {
    method: "GET",
    headers: API_CONFIG.headers,
  });
  if (!res.ok) {
    // @ts-ignore
    throw new Error(
      `Failed to fetch month detail ${res.status} ${res.statusText}`
    );
  }

  const data: MonthDetailResponse = await res.json();
  return data["month_detail"];
};
