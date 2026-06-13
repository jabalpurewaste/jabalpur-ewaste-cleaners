const API_URL =
  "https://script.google.com/macros/s/AKfycbyyqr33wx88507_ixq4YWsiVoxNiJ7TcKBsif2eZ9-A_KGTbuj2ft7dFPWh3wRNSJNybQ/exec";

export async function loginOrSignup(userData) {

  const params =
    new URLSearchParams({
      action: "login",
      name: userData.name,
      mobile: userData.mobile,
      email: userData.email,
      place: userData.place
    });

  const response =
    await fetch(
      `${API_URL}?${params.toString()}`
    );

  return await response.json();

}