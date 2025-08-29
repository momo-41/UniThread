import { Card, Box, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

type ThreadCardProps = {
  title: string;
  authorName: string;
  createdAt: string;
};

const ThreadCard: React.FC<ThreadCardProps> = ({
  title,
  authorName,
  createdAt,
}) => {
  const dateLabel = new Date(createdAt).toLocaleDateString("ja-JP"); // YYYY/MM/DD

  return (
    <Card
      sx={{
        width: 340,
        minHeight: 80,
        borderRadius: 3,
        display: "flex",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 11,
          bgcolor: "#D9D9D9",
          borderRadius: "8px 0 0 8px",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />
      <Box width="100%" p={0.7} sx={{ ml: "14px" }}>
        <Typography fontSize={17} fontWeight="bold" color="#444444">
          {title}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: 20, height: 20 }}>
              <PersonIcon sx={{ fontSize: 20 }} />
            </Avatar>
            <Typography fontSize={14} ml={1} color="#444444">
              {authorName}
            </Typography>
          </Box>
          <Typography fontSize={12} color="#444444" mt={1.5}>
            {dateLabel}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ThreadCard;
