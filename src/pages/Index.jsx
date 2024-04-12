import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Input placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTask()} mb={4} />
      <Button onClick={handleAddTask} colorScheme="blue" mb={4}>
        Add Task
      </Button>
      <List spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
            {task}
            <IconButton icon={<FaTrash />} aria-label="Delete task" onClick={() => handleRemoveTask(index)} colorScheme="red" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
