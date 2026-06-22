const API_URL =
  "https://script.google.com/macros/s/AKfycbxj5GGQXt2fBsQgEEpvfEB-oi_vM1yAoPEwQ3UMNbV8bdtdP1V-jHPKPvW8_md_qbx4/exec";

export async function createPickup(data) {

  const params =
    new URLSearchParams({

      action: "createOrder",

      userId:
        data.userId,

      userName:
        data.userName,

      mobile:
        data.mobile,

      material:
        data.material,

      quantity:
        data.quantity,

      address:
        data.address

    });

  const response =
    await fetch(
      `${API_URL}?${params.toString()}`
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