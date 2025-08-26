import { Card, Box, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export type ThreadCardProps = {
  title: string;
  authorName: string;
  createdAt: string;
};

const ThreadCard = ({ title, authorName, createdAt }: ThreadCardProps) => {
  const dateLabel = new Date(createdAt).toLocaleDateString("ja-JP"); // YYYY/MM/DD

  return (
    <Card sx={{ width: 300, borderRadius: 3, display: "flex" }}>
      <Box width={8} bgcolor="#D9D9D9" borderRadius="8px 0 0 8px" />
      <Box width="100%" p={1}>
        <Typography fontSize={17} fontWeight="bold" color="#444444">
          {title}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: 24, height: 24 }}>
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
