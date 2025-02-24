import React from "react";
import { Clock } from "lucide-react";
import "../styles/cursor-style.css"

export default function MyCurrentHour() {
  const [hour, setHour] = React.useState(); 
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  React.useEffect(() => {
    setInterval(() => {
      setHour(getCurrentTime())
    }, 1000);
  },[])

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex space-x-4">
      <Clock color="gray"/> 
      <p className="text-gray-500">{hour}</p>
      <div
        className="custom-cursor"
        style={{ left: position.x, top: position.y }}
      />
    </div>
  )
}
