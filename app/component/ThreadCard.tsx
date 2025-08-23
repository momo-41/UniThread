import { Card, Box, CardContent, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const ThreadCard = () => {
  return (
    <Card
      sx={{
        width: 300,
        height: "100%",
        borderRadius: 3,
        display: "flex",
      }}
    >
      <Box
        width={8}
        height="100%"
        bgcolor="#D1E6E8"
        borderRadius="8px 0 0 8px"
      />
      <CardContent>
        <Typography fontSize={20} fontWeight="bold">
          中間の範囲について
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: 24, height: 24 }}>
              <PersonIcon sx={{ fontSize: 20 }} />
            </Avatar>
            <Typography fontSize={14} ml={1} color="text.secondary">
              momo
            </Typography>
          </Box>
          <Typography fontSize={12} color="text.secondary">
            2025/8/11
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ThreadCard;
