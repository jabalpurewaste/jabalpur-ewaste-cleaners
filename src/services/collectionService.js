const API_URL =
  "https://script.google.com/macros/s/AKfycbyyqr33wx88507_ixq4YWsiVoxNiJ7TcKBsif2eZ9-A_KGTbuj2ft7dFPWh3wRNSJNybQ/exec";

export async function getCollections() {

  try {

    const response = await fetch(
      `${API_URL}?action=getCollections`
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.error(
      "Error fetching collections:",
      error
    );

    return {
      success: false,
      collections: []
    };
  }

}