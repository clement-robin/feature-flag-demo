export default function LoginInput(props: any) {
  return (
    <input id={props.id} type={props.type} placeholder={props.placeholder} className="w-full h-10 border border-grey-400 rounded-md p-2" />
  );
}