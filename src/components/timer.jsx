import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TimerIcon } from "lucide-react";
import { useTimer } from "react-timer-hook";
import { cn } from "@/lib/utils";

export const Timer = ({ expiryTimestamp, onTimeUp }) => {
  const { seconds, minutes, hours, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: onTimeUp, 
  });

  return (
    <TooltipProvider>
      <Tooltip >
        <TooltipTrigger className={cn('flex h-11 md:h-auto border px-5 py-2 gap-2 rounded-md border-b-4 border-r-4 border-red-500')}>
          <TimerIcon />
          {hours > 0 && `${hours.toString().padStart(2, '0')}:`}
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </TooltipTrigger>
        <TooltipContent>
          <p>Sisa Waktu anda</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
