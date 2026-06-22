import { useEffect, useState } from "react";

import useTheme from "./hooks/useTheme";

import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Materials from "./sections/Materials";
import WhyChoose from "./sections/WhyChoose";
import Certificates from "./sections/Certificates";
import RecentCollections from "./sections/RecentCollections";
import Footer from "./sections/Footer";

import SocialSidebar from "./components/layout/SocialSidebar";
import FloatingWhatsapp from "./components/layout/FloatingWhatsapp";

import Partners from "./components/Sections/Partners";
import AuthPopup from "./components/auth/AuthPopup";
import Enquiry from "./sections/Enquiry";

import PickupRequest from "./sections/PickupRequest";
import MyOrders from "./sections/MyOrders";

import Notification from "./components/common/Notification";

import {
  loginOrSignup
} from "./services/authService";

function App() {

  const {
    darkMode,
    toggleTheme
  } = useTheme();

const [user, setUser] =
  useState(null);

const [showAuthPopup,
  setShowAuthPopup] =
  useState(false);

  const [showNotification,
    setShowNotification] =
    useState(false);

  const [notificationMessage,
    setNotificationMessage] =
    useState("");

  useEffect(() => {

    const savedUser =
      localStorage.getItem(
        "jewcUser"
      );

    if (savedUser) {

      setUser(
        JSON.parse(savedUser)
      );

    }

  }, []);

  const handleLogin =
    async (data) => {

      try {

        const result =
          await loginOrSignup(
            data
          );

        setUser(
          result.user
        );

        localStorage.setItem(
          "jewcUser",
          JSON.stringify(
            result.user
          )
        );

        setNotificationMessage(
          `Welcome ${result.user.name}`
        );

        setShowNotification(
          true
        );

      } catch (err) {

        console.log(err);

        alert(
          "Server Error"
        );

      }

    };

  const handleLogout =
    () => {

      localStorage.removeItem(
        "jewcUser"
      );

      setUser(null);

    };

  return (

    <div
      className="
      min-h-screen
      bg-lightbg
      dark:bg-darkbg
      text-slate-900
      dark:text-slate-100
      transition-colors
      duration-300
      "
    >

      <Notification
        show={
          showNotification
        }
        message={
          notificationMessage
        }
        onClose={() =>
          setShowNotification(
            false
          )
        }
      />

      {showAuthPopup && (

        <AuthPopup
          onLogin={handleLogin}
          onClose={() =>
            setShowAuthPopup(false)
          }
        />

      )}

      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        user={user}
        onLogout={handleLogout}
        onLogin={() =>
          setShowAuthPopup(true)
        }
      />

      <main>

        <Hero />

        <Partners />

        <About />

        <Services />

        <Materials />

        <WhyChoose />

        <Certificates />

        <RecentCollections />

        <Enquiry
          user={user}
        />

        <PickupRequest
          user={user}
        />

        <MyOrders
          user={user}
        />

        <Footer />

        <SocialSidebar />

        <FloatingWhatsapp />

      </main>

    </div>
  );
}

export default App;