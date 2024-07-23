import {Box, Spinner} from "@chakra-ui/react";

export const Loader = () => {
    return (
        <Box
            display="flex"
            pos="absolute"
            top="0"
            left="0"
            zIndex={2}
            bg='white'
            w='100%'
            h='100%'
            p={4}
            color='white'
            borderRadius={4}
        >
            <Spinner color='black' margin="auto" size='xl' />
        </Box>
    )
}