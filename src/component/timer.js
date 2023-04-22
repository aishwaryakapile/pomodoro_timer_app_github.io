import { useState, useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

function Timer() {
  const [duration, setDuration] = useState(25 * 60); // 25 minutes
  const [running, setRunning] = useState(false); // Flag boolean value - initially set as false and set to true  when start click 
  const [remaining, setRemaining] = useState(duration); // remianng sec

  useEffect(() => {
    let interval = null;
    if (running && remaining > 0) {
      interval = setInterval(() => {
        setRemaining((prevRemaining) => prevRemaining - 1);
      }, 1000);
    } else if (remaining === 0) {
      // Timer completed
      setRunning(false);
      // Start break timer
      setDuration(5 * 60);// 300 sec
      setRemaining(5 * 60); // 300 sec 
    }
    return () => clearInterval(interval);
  }, [running, remaining]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setRemaining(duration);
  };

  const handleModeSwitch = () => {
    setRunning(false);
    setDuration((prevDuration) => (prevDuration === 25 * 60 ? 5 * 60 : 25 * 60));
    setRemaining((prevDuration) => (prevDuration === 25 * 60 ? 5 * 60 : 25 * 60));
  };

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  return (
    <Box textAlign="center"  mt={5}>
      <Text fontSize="6xl">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text>
      <Button colorScheme="blue" m={2} variant="outline" size="sm" onClick={handleStart} disabled={running}>
        Start
      </Button>
      <Button colorScheme="blue" m={2} variant="outline" size="sm" onClick={handlePause} disabled={!running}>
        Pause
      </Button>
      <Button colorScheme="blue" m={2} variant="outline" size="sm" onClick={handleReset}>
        Reset
      </Button>
      <Button colorScheme="blue" m={2} variant="outline" size="sm" onClick={handleModeSwitch}>
        {duration === 25 * 60 ? 'Short Break' : 'Pomodoro'}
      </Button>
    </Box>
  );
}
export default Timer;