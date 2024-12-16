import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Separator className="basis-[46%]" />
        <p className="text-muted-foreground">or</p>
        <Separator className="basis-[46%]" />
      </div>
      <div>
        <button className="flex bg-white items-center justify-center font-medium space-x-2 w-full border py-3 rounded-md hover:bg-primary/10">
          <FcGoogle size={28} />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
