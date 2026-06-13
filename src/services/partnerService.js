const API_URL =
  "https://script.google.com/macros/s/AKfycbyyqr33wx88507_ixq4YWsiVoxNiJ7TcKBsif2eZ9-A_KGTbuj2ft7dFPWh3wRNSJNybQ/exec";

export async function getPartners() {

  const response =
    await fetch(
      `${API_URL}?action=getPartners`
    );

  return await response.json();
}