import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';

const Statistic = () => {
  const [shimmerIndex, setShimmerIndex] = useState(null);

  useEffect(() => {
    const triggerShimmer = () => {
      const randomIndex = Math.floor(Math.random() * 4); // Randomly select one of the 4 buttons
      setShimmerIndex(randomIndex);
      setTimeout(() => setShimmerIndex(null), 4000); // Reset after 2 cycles of the 2s pulse animation
    };

    const interval = setInterval(triggerShimmer, Math.random() * 5000 + 2000); // Random interval between 2s and 7s
    return () => clearInterval(interval);
  }, []);

  const handleHomeClick = () => console.log('Home button clicked');
  const handleAddClick = () => console.log('Add button clicked');
  const handleStatsClick = () => console.log('Stats button clicked');
  const handleSettingsClick = () => console.log('Settings button clicked');

  return (
    <Box p={5} boxShadow="neumorphic" w="300px" h="500px" borderRadius="20px">
      <Flex justify="space-between" align="center" mb={4}>
        <Flex align="center" gap={2}>
          <Box as="span" fontSize="16px" color="neumorphic.text" p={1} borderRadius="50%" boxShadow="neumorphic">
            ←
          </Box>
          <Text fontSize="16px" color="neumorphic.text">•••</Text>
        </Flex>
        <Text fontSize="24px" color="neumorphic.text">Statistic</Text>
        <Flex align="center" fontSize="12px" color="neumorphic.text" bg="neumorphic.background" p={2} borderRadius="10px" boxShadow="neumorphic">
          <Text>Period: Last 30 days</Text>
          <Box as="span" ml={1} fontSize="16px" color="neumorphic.text" p={1} borderRadius="50%" boxShadow="neumorphic">
            →
          </Box>
        </Flex>
      </Flex>
      <Box
        w="180px"
        h="180px"
        mx="auto"
        my={5}
        borderRadius="50%"
        bgGradient="conic-gradient(#ff9f43 0% 52%, #d3d8e0 52% 100%)"
        boxShadow="neumorphic"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          w="140px"
          h="140px"
          borderRadius="50%"
          bg="neumorphic.background"
          boxShadow="neumorphicInset"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          fontSize="28px"
          fontWeight="bold"
          color="neumorphic.accent"
        >
          <Box
            position="absolute"
            top="10px"
            w="24px"
            h="24px"
            borderRadius="50%"
            bg="neumorphic.background"
            boxShadow="neumorphic"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="14px" color="neumorphic.accent">↑</Text>
          </Box>
          52%
        </Box>
      </Box>
      <Flex align="center" bg="neumorphic.mint" p={3} borderRadius="10px" boxShadow="neumorphic">
        <Box mr={3} w="24px" h="24px" bg="#8b4513" borderRadius="50%" />
        <Box flex="1">
          <Text fontSize="14px" color="neumorphic.text">Restaurants</Text>
          <Text fontSize="16px" fontWeight="bold" color="neumorphic.text">$1593,58</Text>
        </Box>
        <Text fontSize="16px" fontWeight="bold" color="neumorphic.accent">25%</Text>
      </Flex>
      <Flex justify="space-around" mt={4}>
        {['🏠', '➕', '📊', '⚙️'].map((icon, index) => (
          <Button
            key={index}
            variant="navButton"
            onClick={
              index === 0 ? handleHomeClick :
              index === 1 ? handleAddClick :
              index === 2 ? handleStatsClick :
              handleSettingsClick
            }
            className={`${index === 1 ? 'active' : ''} ${shimmerIndex === index ? 'shimmer' : ''}`}
          >
            {icon}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Statistic;