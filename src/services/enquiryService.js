const API_URL =
  "https://script.google.com/macros/s/AKfycbxj5GGQXt2fBsQgEEpvfEB-oi_vM1yAoPEwQ3UMNbV8bdtdP1V-jHPKPvW8_md_qbx4/exec";

export async function submitEnquiry(data) {

  const params =
    new URLSearchParams({

      action: "enquiry",

      userId:
        data.userId,

      userName:
        data.userName,

      mobile:
        data.mobile,

      description:
        data.description

    });

  const response =
    await fetch(
      `${API_URL}?${params.toString()}`
    );

  return await response.json();
}