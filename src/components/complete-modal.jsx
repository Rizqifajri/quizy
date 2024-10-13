import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Link } from "react-router-dom";

export const CompleteModal = ({ score, totalQuestions, totalAnswered, onClose }) => {

  return (
    <AlertDialog open onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-center">Quiz Completed!</AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-center">
            You answered a total of <span className="font-bold text-black">{totalAnswered ?? 10}</span> questions.
            <br /> You scored <span className="font-bold text-black">{score}</span> out of <span className="font-bold text-black">{totalQuestions}</span>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Link to="/start-quizy">
          <AlertDialogAction
            className="bg-white text-black border hover:bg-black hover:text-white border-b-4 border-r-4 border-blue-500 w-full"
            onClick={onClose}
          >
            Back to home
          </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
