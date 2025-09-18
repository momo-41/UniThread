import { Card, Box, Typography, Avatar, CardActionArea} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link"; 

type ThreadCardProps = {
  threadId: string;
  title: string;
  authorName: string;
  createdAt: string;
  active?: boolean;
  basePath: string;
};

const ThreadCard: React.FC<ThreadCardProps> = ({
  threadId,
  title,
  authorName,
  createdAt,
  basePath,
  active = false,
}) => {
const dateLabel = new Date(createdAt).toLocaleDateString("ja-JP"); // YYYY/MM/DD
const href = `${basePath}?t=${threadId}`;
  return (
    <Card aria-current={active ? "true" : undefined}
      sx={{
        width: 300,
        borderRadius: 3,
        display: "flex",
        outline: active ? "2px solid" : "0",
        outlineColor: active ? "primary.main" : "transparent",
        outlineOffset: 0,
      }}>
      <CardActionArea
        component={Link}     
        href={href}
        replace                 
        scroll={false}          
        sx={{ height: "100%" }}
      >
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
      </CardActionArea>
    </Card>
  );
};

export default ThreadCard;
