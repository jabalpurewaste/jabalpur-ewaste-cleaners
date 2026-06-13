const API_URL =
  "https://script.google.com/macros/s/AKfycbyyqr33wx88507_ixq4YWsiVoxNiJ7TcKBsif2eZ9-A_KGTbuj2ft7dFPWh3wRNSJNybQ/exec";

export async function submitEnquiry(data) {

  const params =
    new URLSearchParams({
      action: "enquiry",
      userId: data.userId,
      userName: data.userName,
      mobile: data.mobile,
      description: data.description
    });

  const response =
    await fetch(
      `${API_URL}?${params.toString()}`
    );

  return await response.json();

}