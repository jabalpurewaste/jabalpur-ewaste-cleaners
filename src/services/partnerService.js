const API_URL =
  "https://script.google.com/macros/s/AKfycbxj5GGQXt2fBsQgEEpvfEB-oi_vM1yAoPEwQ3UMNbV8bdtdP1V-jHPKPvW8_md_qbx4/exec";

export async function getPartners() {

  try {

    const response =
      await fetch(
        `${API_URL}?action=getPartners`
      );

    return await response.json();

  } catch (err) {

    console.log(
      "Error fetching partners:",
      err
    );

    return {

      success: false,

      partners: []

    };
  }
}