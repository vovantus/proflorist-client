import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Skeleton,
} from "@mui/material";
import LocalShipping from "@mui/icons-material/LocalShipping";
import Storefront from "@mui/icons-material/Storefront";
import Event from "@mui/icons-material/Event";
import useGetStaticInfo from "../../../hooks/useGetStaticInfo";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo";

const deliveries = {
  courier: {
    icon: <LocalShipping />,
    label: "Home Delivery",
    value: "We deliver to your doorstep",
    link: "#",
  },
  pickup: {
    icon: <Storefront />,
    label: "In-Store Pickup",
    value: "Pick up at our store",
    link: "#",
  },
  event: {
    icon: <Event />,
    label: "Event Delivery",
    value: "We deliver to your events",
    link: "#",
  },
};

export default function DeliveryPage() {
  const { floristInfo } = useGetFloristInfo();
  const { info, isLoading } = useGetStaticInfo(floristInfo.name, "delivery");

  console.log(info, isLoading);
  return (
    <Card sx={{ width: 345, margin: "auto", marginTop: 4, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Delivery Options
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {info ? (
            info.text
          ) : (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton width={120} />
            </>
          )}
        </Typography>
        {isLoading ? (
          <>
            <Skeleton variant="rounded" height={60} sx={{ mt: 1 }} />
            <Skeleton variant="rounded" height={60} sx={{ mt: 1 }} />
            <Skeleton variant="rounded" height={60} sx={{ mt: 1 }} />
          </>
        ) : (
          <List>
            {info?.deliveryOptions &&
              Object.entries(info?.deliveryOptions)
                .filter((item) => item[1])
                .map(([key, value], index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      {deliveries[key as keyof typeof deliveries].icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={value}
                      secondary={
                        deliveries[key as keyof typeof deliveries].label
                      }
                    />
                  </ListItem>
                ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
}
