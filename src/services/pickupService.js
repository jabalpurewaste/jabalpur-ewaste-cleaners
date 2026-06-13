const API_URL =
  "https://script.google.com/macros/s/AKfycbyyqr33wx88507_ixq4YWsiVoxNiJ7TcKBsif2eZ9-A_KGTbuj2ft7dFPWh3wRNSJNybQ/exec";

export async function createPickup(data) {

  const params =
    new URLSearchParams({
      action: "createOrder",
      userId: data.userId,
      userName: data.userName,
      mobile: data.mobile,
      material: data.material,
      quantity: data.quantity,
      address: data.address
    });

  const response =
    await fetch(
      `${API_URL}?${params}`
    );

  return await response.json();
}

export async function fetchOrders(
  userId
) {

  const response =
    await fetch(
      `${API_URL}?action=getOrders&userId=${userId}`
    );

  return await response.json();
}