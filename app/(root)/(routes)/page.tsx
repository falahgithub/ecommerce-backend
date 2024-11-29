"use client";
import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";
import {UserButton} from '@clerk/nextjs'
import { Children, useEffect } from "react";

export default function SetupPage() {
  const onOpen = useStoreModal((state)=> state.onOpen);
  const isOpen = useStoreModal((state)=> state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  
  }, [isOpen, onOpen]);

  return null;
}
