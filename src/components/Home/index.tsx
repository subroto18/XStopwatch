import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Layout from "../common/Layout";

const Index = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer: number;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const handleReset = () => {
    setSeconds(0);
    setRunning(false);
  };
  const handleStart = () => {
    setRunning(!running);
  };

  return (
    <Layout>
      <div>
        <p>
          Timer: {min}:{sec < 10 ? `0${sec}` : sec}
        </p>
        <Button
          onClick={handleStart}
          label={(seconds || seconds == 0) && !running ? "Start" : "Stop"}
        />
        <Button onClick={handleReset} label="Reset" />
      </div>
    </Layout>
  );
};

export default Index;
