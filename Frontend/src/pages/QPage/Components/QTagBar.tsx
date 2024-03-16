import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import QTagsPills from "./QTagsPills";

export default function QTagBar({tags}) {

    return (
        <div className="py-8" >
                {tags.map((tag) => (
                    <QTagsPills tag={tag} />
                ))}
        </div>
    );
}
