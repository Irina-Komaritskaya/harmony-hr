"use client";

import * as React from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function Combobox({
    classNameButton,
    content,
    placeholder,
    startValue,
}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(startValue ? startValue : "");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className="flex">
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "border-blue-gray-300 bg-wgite h-[33px] py-1 pl-2 pr-6 relative rounded-lg font-normal justify-between",
                            classNameButton
                        )}
                    >
                        {value
                            ? content.find((item) => item.value === value)
                                ?.label
                            : placeholder}

                        {value ? <X className="stroke-[#1C314499] w-4 h-4 mr-2.5" /> : ""}
                        <div className="bg-blue-gray absolute right-0 h-full rounded-r-lg flex items-center p-1">
                            <ChevronDown className="h-4 w-4 stroke-blue-gray-700" />
                        </div>
                    </Button>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {content.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === item.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    {item.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
