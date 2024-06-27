/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumVolunteerProfileAvailability } from "./EnumVolunteerProfileAvailability";
import { IsEnum, IsOptional, IsString, MaxLength } from "class-validator";
import { EnumVolunteerProfileExperience } from "./EnumVolunteerProfileExperience";

@InputType()
class VolunteerProfileCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumVolunteerProfileAvailability,
    isArray: true,
  })
  @IsEnum(EnumVolunteerProfileAvailability, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumVolunteerProfileAvailability], {
    nullable: true,
  })
  availability?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumVolunteerProfileExperience,
  })
  @IsEnum(EnumVolunteerProfileExperience)
  @IsOptional()
  @Field(() => EnumVolunteerProfileExperience, {
    nullable: true,
  })
  experience?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fullName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;
}

export { VolunteerProfileCreateInput as VolunteerProfileCreateInput };
