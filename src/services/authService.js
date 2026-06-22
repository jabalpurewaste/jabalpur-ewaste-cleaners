const API_URL =
  "https://script.google.com/macros/s/AKfycbxj5GGQXt2fBsQgEEpvfEB-oi_vM1yAoPEwQ3UMNbV8bdtdP1V-jHPKPvW8_md_qbx4/exec";

export async function loginOrSignup(userData) {

  const params =
    new URLSearchParams({

      action: "login",

      name:
        userData.name,

      mobile:
        userData.mobile,

      email:
        userData.email,

      place:
        userData.place

    });

  const response =
    await fetch(
      `${API_URL}?${params.toString()}`
    );

  return await response.json();
}