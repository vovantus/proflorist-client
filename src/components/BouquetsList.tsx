import BouquetCard from "./BouquetCard/BouquetCard";
import BouquetCardSkeleton from "./BouquetCard/BouquetCardSkeleton";
import Bouquet from "../types/bouquet";
import { Alert, Box, Snackbar, SwipeableDrawer } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import BouquetDetailesCard from "./BouquetDetailesCard/BouquetDetailsCard";
import theme from "../theme/theme";
import { useGetCategoryBouquets } from "../hooks/useGetCategoryBouquets";

interface BouquetListProps {
  floristName: string;
  categoryId?: string;
}

export interface SnackbarMessage {
  message: string;
  key: number;
}

const detailesCardTransitionTime = 500;

export default function BouquetList({ floristName, categoryId }: BouquetListProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { newBouquets, status, initiateUpdate } = useGetCategoryBouquets(
    floristName,
    categoryId
  );
  const [bouquetsList, setBouquetsList] = useState<Bouquet[]>([]);
  const [activeBouquet, setActiveBouquet] = useState<Bouquet | null>(null);
  const [showActiveBouquet, setShowActiveBouquet] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([]);
  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(
    undefined
  );

  useEffect(() => {
    setBouquetsList((oldBouqs) => [...oldBouqs, ...newBouquets]);
  }, [newBouquets]);

  const canUpdate = status === "idle";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (bouquetsList.length > 0 && canUpdate) {
              initiateUpdate();
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.0,
      }
    );

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [bouquetsList.length, initiateUpdate, canUpdate]);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setShowSnackbar(true);
    } else if (snackPack.length && messageInfo && showSnackbar) {
      setShowSnackbar(false);
    }
  }, [snackPack, messageInfo, showSnackbar]);

  const handleCloseActiveBouquet = () => {
    setShowActiveBouquet(false);
  };

  const setActiveBouquetAndOpen = (bouquet: Bouquet) => {
    setActiveBouquet(bouquet);
    setShowActiveBouquet(true);
  };

  const handelAddToCart = (bouquetName: string) => {
    setSnackPack((prev) => [
      ...prev,
      { message: bouquetName, key: new Date().getTime() },
    ]);
  };

  const handleSnackbarExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,350px)",
          width: "100%",
          marginX: "auto",
          gap: "8px",
          justifyContent: "center",
          alignContent: "start",
        }}
      >
        {status === "loading" && bouquetsList.length === 0
          ? Array.from(new Array(12)).map((_, index) => (
              <BouquetCardSkeleton key={index} />
            ))
          : bouquetsList.map((el) => (
              <BouquetCard
                key={el.id}
                bouquet={el}
                showBouquet={setActiveBouquetAndOpen}
                onAddToCart={handelAddToCart}
              />
            ))}

        {canUpdate && <BouquetCardSkeleton ref={targetRef} />}
      </Box>
      <SwipeableDrawer
        anchor="bottom"
        open={showActiveBouquet}
        onClose={handleCloseActiveBouquet}
        onOpen={() => setShowActiveBouquet(true)}
        transitionDuration={detailesCardTransitionTime}
        PaperProps={{
          sx: { borderTopLeftRadius: "24px", borderTopRightRadius: "24px" },
        }}
        ModalProps={{
          keepMounted: false,
        }}
      >
        {activeBouquet && (
          <BouquetDetailesCard
            bouquet={activeBouquet}
            handleClose={() => setShowActiveBouquet(false)}
          />
        )}
      </SwipeableDrawer>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={showSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={1000}
        onClose={() => setShowSnackbar(false)}
        TransitionProps={{ onExited: handleSnackbarExited }}
        sx={{ top: { xxs: 64, sm: 80 } }}
      >
        <Alert
          icon={false}
          severity="info"
          variant="outlined"
          sx={{
            width: "100%",
            color: theme.palette.secondary.contrastText,
            bgcolor: theme.palette.secondary.main,
          }}
        >
          {`${messageInfo?.message} added to cart`}
        </Alert>
      </Snackbar>
    </>
  );
}
